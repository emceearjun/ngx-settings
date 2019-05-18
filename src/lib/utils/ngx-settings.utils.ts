export class NgxSettingsUtils {
  static getValueFromObject(key: string, object: any) {
    // If key is undefined, return entire object
    if (!key) {
      return object;
    }

    // Check if key is for root element
    if (key.indexOf("\\.") !== -1) {
      return object["key"];
    }

    let keyArr = key.split(".");
    let value = object[keyArr[0]];
    for (let i = 1; i < keyArr.length; i++) {
      if (value[keyArr[i]]) {
        value = value[keyArr[i]];
      } else {
        value = null;
        break;
      }
    }

    return value;
  }
}
