
export const shadowStyles = Platform.select({
    ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.22,
        shadowRadius: 5,
    },
    android: {
        elevation: 24,
        shadowColor: '#000000',
    },
    default: {},
})

export const imageShadowStyles = Platform.select({
    ios: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    android: {
        elevation: 10,
        shadowColor: '#2E2E2E',
    },
    default: {},
})

export const buttonShadowStyles = Platform.select({
    ios: {
        shadowColor: "#0091D9",
        shadowOffset: {
            width: 2,
            height: -3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    android: {
        elevation: 10,
        shadowColor: '#2E2E2E',
    },
    default: {},
})

export const bookingShadowStyles = Platform.select({
    ios: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 1,
            height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,
    },
    android: {
        elevation: 8,
        shadowColor: '#2E2E2E',
    },
    default: {},
})