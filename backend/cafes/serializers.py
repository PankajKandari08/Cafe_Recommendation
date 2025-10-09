# serializers.py
from rest_framework import serializers

class CafeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cafe
        fields = '__all__'

class RecommendationRequestSerializer(serializers.Serializer):
    user_id = serializers.IntegerField()
    location = serializers.CharField()

class RecommendationResponseSerializer(serializers.Serializer):
    cafes = CafeSerializer(many=True)
