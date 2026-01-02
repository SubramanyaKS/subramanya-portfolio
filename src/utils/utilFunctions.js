export const resume = (link) => {
    window.open(
        link,
        "_blank",
        'noopener'
    );
};

export const wordVarients = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
}