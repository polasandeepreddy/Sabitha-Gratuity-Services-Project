from django.contrib import admin
from .models import Testimonial


admin.site.site_header = "Sabitha Gratuity Services Admin"
admin.site.site_title = "SGS Admin Portal"
admin.site.index_title = "Welcome to Sabitha Gratuity Services Admin Dashboard"


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'rating', 'is_approved', 'created_at']
    list_filter = ['rating', 'is_approved', 'created_at']
    search_fields = ['name', 'company', 'location']
    readonly_fields = ['created_at']
    
    def approve_testimonials(self, request, queryset):
        queryset.update(is_approved=True)
    approve_testimonials.short_description = "Approve selected testimonials"
    
    actions = [approve_testimonials]