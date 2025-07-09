import { useState, useCallback } from 'react';

export function useCopyToClipboard() {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = useCallback(async (text: string) => {
        try {
        // Método 1: API moderna de clipboard (funciona em contextos seguros)
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
            return true;
        }

        // Método 2: Fallback usando execCommand com textarea
        const textArea = document.createElement('textarea');
        textArea.value = text;

        // Posicionamento para iOS
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.style.fontSize = '16px'; // Previne zoom no iOS

        document.body.appendChild(textArea);

        // Para iOS: precisa ser focado
        textArea.focus();
        textArea.select();

        // Tenta copiar usando execCommand
        let successful = false;
        try {
            successful = document.execCommand('copy');
        } catch (err) {
            console.error('execCommand falhou:', err);
        }

        document.body.removeChild(textArea);

        if (successful) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
            return true;
        }

        // Método 3: Fallback específico para iOS/Safari
        if (isIOS() || isSafari()) {
            return await copyToClipboardIOS(text);
        }

        throw new Error('Todos os métodos falharam');
        } catch (err) {
        console.error('Erro ao copiar:', err);
        // Tenta o método iOS como último recurso
        if (isIOS() || isSafari()) {
            return await copyToClipboardIOS(text);
        }
        return false;
        }
    }, []);

    // Função específica para iOS/Safari
    const copyToClipboardIOS = async (text: string) => {
        try {
        const input = document.createElement('input');
        input.value = text;
        input.style.position = 'absolute';
        input.style.left = '-9999px';
        input.style.top = '-9999px';
        input.style.fontSize = '16px'; // Previne zoom

        document.body.appendChild(input);

        // Para iOS, precisa ser editável e focado
        input.contentEditable = 'true';
        input.readOnly = false;

        // Foca no input
        input.focus();

        // Seleciona todo o texto
        input.setSelectionRange(0, text.length);

        // Tenta copiar
        const success = document.execCommand('copy');
        document.body.removeChild(input);

        if (success) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
            return true;
        }

        return false;
        } catch (err) {
        console.error('Erro no fallback iOS:', err);
        return false;
        }
    };

    // Detecta se é iOS
    const isIOS = () => {
        return (
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
        );
    };

    // Detecta se é Safari
    const isSafari = () => {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    };

    return { copyToClipboard, isCopied };
}
