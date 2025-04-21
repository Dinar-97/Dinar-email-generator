function generateEmail() {
    const jobTitle = document.getElementById('jobTitle').value;
    const emailResult = document.getElementById('emailResult');

    if (jobTitle) {
        const emailBody = `مرحباً،\n\nأرغب في التقديم على وظيفة ${jobTitle} في شركتكم الموقرة. أنا مهتم بالحصول على فرصة للعمل في هذا المجال.\n\nمع خالص التحية.`;
        emailResult.textContent = emailBody;
    } else {
        emailResult.textContent = "يرجى إدخال اسم الوظيفة أولاً.";
    }
}
