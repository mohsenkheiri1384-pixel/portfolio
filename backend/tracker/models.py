from django.db import models


class Visit(models.Model):
    ip = models.GenericIPAddressField()
    path = models.CharField(max_length=500)
    user_agent = models.TextField(blank=True)
    referer = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "بازدید"
        verbose_name_plural = "بازدیدها"
        ordering = ['-created_at']

    def str(self):
        return f"{self.ip} - {self.path}"