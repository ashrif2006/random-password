# 🔐 Password Generator (JavaScript)

مشروع بسيط ولطيف لتوليد كلمات مرور قوية وعشوائية باستخدام **JavaScript**، مع إمكانية **نسخ كلمة المرور بضغطة زر** وتنبيه المستخدم بعد النسخ.

---

## 🚀 فكرة المشروع

الهدف من المشروع هو:

* توليد **Password قوي** تلقائيًا
* يحتوي على:

  * حروف كبيرة وصغيرة
  * أرقام
  * رموز خاصة
* سهولة النسخ والاستخدام
* تجربة مستخدم بسيطة وواضحة

المشروع مناسب جدًا للمبتدئين في JavaScript وDOM Manipulation 💪

---

## 🧠 المميزات

✅ توليد كلمة مرور بطول ثابت (14 حرف)

✅ استخدام `Math.random()` لإنشاء Password عشوائي

✅ زرار لنسخ كلمة المرور باستخدام Clipboard API

✅ رسالة تنبيه (Alert) عند النسخ

✅ كود بسيط وسهل التعديل والتطوير

---

## 🛠️ التقنيات المستخدمة

* HTML
* CSS
* JavaScript (Vanilla JS)

---

---

## 🌍 Live Demo

جرب المشروع مباشرة من هنا 👇

🔗 **[اضغط هنا لتجربة الموقع](https://ashrif2006.github.io/random-password/)**

> ⚠️ ملاحظة: استبدل الرابط برابط الموقع الحقيقي بعد رفعه (GitHub Pages / Netlify / Vercel)

---

## 📂 مثال على الكود

```js
function createPass(){
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    const passLen = 14;
    let pass = "";

    for(let i = 0; i < passLen; i++){
        const randomNum = Math.floor(Math.random() * char.length);
        pass += char[randomNum];
    }

    return pass;
}
```

---

## ✨ أفكار للتطوير

* اختيار طول كلمة المرور
* إضافة خيار (رموز / بدون رموز)
* مؤشر قوة الباسورد (Weak / Strong)
* حفظ آخر Password في LocalStorage

---

## 👨‍💻 المطور

Ahmed Ashraf 💙

لو عجبك المشروع اعمله ⭐ على GitHub وشيره مع صحابك 🚀
