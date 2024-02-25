from rest_framework import serializers
from .models import customer_request,customer_message,subscriber,review
from .forms import customusercreationforms
from django.contrib.auth.models import User

class customer_request_serializer(serializers.ModelSerializer):
    class Meta:
        model= customer_request
        fields= ["id","customer_name","email_ID","phone_number","address","city","state","pin_code","request_Type","description","date","connect","cdate"]
        extra_kwargs = {'id': {'read_only':True},
                        'connect': {'read_only':True},
                        'cdate': {'read_only':True}}



class customer_message_serializer(serializers.ModelSerializer):
    class Meta:
        model= customer_message
        fields= ["name","email_ID","phone_number","subject","message","author"]
        extra_kwargs = {'author': {'read_only':True}}



class subscriber_serializer(serializers.ModelSerializer):
    class Meta:
        model= subscriber
        fields= ["email_ID"]





class review_serializer(serializers.ModelSerializer):
    class Meta:
        model= review
        fields= ["review_message","boss"]
        extra_kwargs = {'boss': {'read_only':True}}

class registerserializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    password1 = serializers.CharField(write_only = True,style={'input_type':'password'})
    password2 = serializers.CharField(write_only = True,style={'input_type':'password'})

    def validate(self,data):
        form = customusercreationforms(data)
        if form.is_valid():
            user = form.save()
            data['user'] = user
        else:
            raise serializers.ValidationError(form.errors)
        return data
    def to_representation(self, instance):
        user = instance.get('user',None)
        if user:
            return {
                'user_id': user.id,
                'username': user.username,
                'email':user.email,
                'first_name':user.first_name,
                'last_name':user.last_name,
            }
        return {}

class userloginserializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True,style={'input_type':'password'})

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')
        if username and password:
            user = User.objects.filter(username=username).first()
            if user and user.check_password(password):
                data['user'] = user
            else:
                raise serializers.ValidationError("Invalid username or password")
        else:
            raise serializers.ValidationError("Both username and password are required")
        return data
