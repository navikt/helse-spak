export const copyContentsToClipboard = (node: HTMLElement | null) => {
    let didCopy = false;

    if (node) {
        node.contentEditable = 'true';
        const range = document.createRange();
        range.selectNodeContents(node);

        const selection = window.getSelection();

        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);

            didCopy = document.execCommand('copy');
            selection.removeAllRanges();
        }
        node.contentEditable = 'false';
    }

    return didCopy;
};
