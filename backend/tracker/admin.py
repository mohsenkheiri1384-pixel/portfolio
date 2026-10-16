from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Visit


@admin.register(Visit)
class VisitAdmin(admin.ModelAdmin):
    list_display = ['ip', 'path', 'created_at']
    list_filter = ['created_at']
    search_fields = ['ip', 'path']
    readonly_fields = ['ip', 'path', 'user_agent', 'referer', 'created_at']
    date_hierarchy = 'created_at'