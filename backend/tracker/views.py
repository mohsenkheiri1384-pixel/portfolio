from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.utils import timezone
from .models import Visit


@api_view(['GET'])
@permission_classes([AllowAny])
def get_stats(request):
    """آمار کلی"""
    today = timezone.now().date()
    total = Visit.objects.count()
    today_count = Visit.objects.filter(created_at__date=today).count()
    return Response({
        'total_visits': total,
        'today_visits': today_count,
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def track_visit(request):
    """ثبت بازدید"""
    try:
        Visit.objects.create(
            ip=request.META.get('REMOTE_ADDR', '0.0.0.0'),
            path=request.data.get('path', '/'),
            user_agent=request.META.get('HTTP_USER_AGENT', ''),
            referer=request.META.get('HTTP_REFERER', ''),
        )
        return Response({'status': 'ok'})
    except Exception as e:
        return Response({'error': str(e)}, status=500)