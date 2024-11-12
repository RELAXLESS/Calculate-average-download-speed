function calculateSpeed() {
    // الحصول على المدخلات من المستخدم
    const sizeGb = parseFloat(document.getElementById("size").value);
    const hours = parseInt(document.getElementById("hours").value);
    const minutes = parseInt(document.getElementById("minutes").value);

    // التحقق من المدخلات
    if (isNaN(sizeGb) || isNaN(hours) || isNaN(minutes) || sizeGb <= 0 || hours < 0 || minutes < 0) {
        document.getElementById("result").innerText = "يرجى إدخال قيم صحيحة لجميع الحقول.";
        return;
    }

    // تحويل الحجم من غيغا بايت إلى ميغا بايت
    const sizeMb = sizeGb * 1024;

    // حساب الوقت المستغرق بالثواني
    const timeDiffSeconds = (hours * 3600) + (minutes * 60);

    // حساب سرعة التحميل بالميغا بايت في الثانية
    const speedMbps = sizeMb / timeDiffSeconds;

    // عرض النتيجة
    document.getElementById("result").innerText = `متوسط سرعة التحميل هو ${speedMbps.toFixed(2)} ميغا بايت في الثانية`;
}

