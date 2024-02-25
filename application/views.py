from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import customer_request_serializer,customer_message_serializer,subscriber_serializer,review_serializer,registerserializer,userloginserializer
from .models import customer_request,customer_message,subscriber,review
from rest_framework.authtoken.models import Token
# Create your views here.
class bookView(APIView):
    serializer_class= customer_request_serializer

    def get(self,request):
        data= customer_request.objects.all()
        serializer = self.serializer_class(data, many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors)



class contactView(APIView):
    serializer_class= customer_message_serializer

    def get(self,request):
        data= customer_message.objects.all()
        serializer = self.serializer_class(data, many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)




class subscribeView(APIView):
    serializer_class= subscriber_serializer

    def get(self,request):
        data= subscriber.objects.all()
        serializer = self.serializer_class(data, many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    

class reviewView(APIView):
    serializer_class= review_serializer

    def get(self,request):
        data= review.objects.all()
        serializer = self.serializer_class(data, many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
class registerView(APIView):
    serializer_class= registerserializer
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']

            response_data = {
                'user_id': user.id,
                'username': user.username,
                'email':user.email,
                'first_name':user.first_name,
                'last_name':user.last_name,
            }
            return Response(response_data)
        return Response(serializer.errors)
    
class userloginView(APIView):
    serializer_class = userloginserializer
    def post(self,request,*args,**kwargs):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token,created = Token.objects.get_or_create(user=user)
            response_data = {
                'token': token.key,
                'user_id': user.id,
                'username': user.username,
                'email':user.email,
                'first_name':user.first_name,
                'last_name':user.last_name,
            }
            return Response(response_data)
        return Response(serializer.errors)
    
class appointmentView(APIView):
    serializer_class= customer_request_serializer

    def get(self,request):
        data= customer_request.objects.all()
        serializer = self.serializer_class(data, many=True)
        return Response(serializer.data)
    
class deletebook(APIView):
    def delete(self,request,ID):
        data= customer_request.objects.get(pk=ID)
        data.delete()
        serializer=customer_request_serializer(data,many=False)
        return Response(serializer.data)