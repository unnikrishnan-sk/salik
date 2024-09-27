import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log("error_storeData_asyncStorage", error);
    }
}


export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value === null) {
            return false;
        } else {
            return true
        }
    } catch (error) {
        console.log("error_getData_asyncStorage", error);
    }
}

export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log('error_removeData_asyncStorage', e);
    }
};

