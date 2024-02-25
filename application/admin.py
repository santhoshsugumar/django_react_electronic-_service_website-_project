from django.contrib import admin
from application.models import customer_request,customer_message,review,subscriber
# Register your models here.
admin.site.register(customer_request)
admin.site.register(customer_message)
admin.site.register(review)
admin.site.register(subscriber)
