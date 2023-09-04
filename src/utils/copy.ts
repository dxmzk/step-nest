/**
 * Author: Meng
 * Date: 2022-10-12
 * Desc:
 */

/** 复制属性 */
export function copyObjField(obj: any, tag: Object, fields?: string[]) {
  if (obj == null || tag == null) {
    return;
  }
  try {
    if (fields && fields.length) {
      fields.forEach((key) => {
        if (obj.hasOwnProperty(key) && tag.hasOwnProperty(key)) {
          obj[key] = tag[key];
        }
      });
    } else {
      for (const key in tag) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = tag[key];
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function copyObjToEntity(entity: any, tag = {}, fields?: string[]) {
  if (entity == null || tag == null) {
    return;
  }
  try {
    if (fields && fields.length) {
      fields.forEach((key) => {
        if (tag.hasOwnProperty(key) && tag.hasOwnProperty(key)) {
          entity[key] = tag[key];
        }
      });
    } else {
      for (const key in tag) {
        entity[key] = tag[key];
      }
    }
  } catch (error) {
    console.log(error);
  }
}
