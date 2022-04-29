from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DestSerializer
from .models import Destination

# Create your views here.

@api_view(['GET'])
def destList(request):
    dests = Destination.objects.all()
    serializer = DestSerializer(dests, many=True)
    return Response(serializer.data)

#@api_view(['GET'])
#def destDetail(request, pk):
#    dests = Destination.objects.get(id=pk)
#    serializer = DestSerializer(dests, many=False)
#    return Response(serializer.data)

@api_view(['POST'])
def destCreate(request):
    serializer = DestSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def destUpdate(request, pk):
    dest = Destination.objects.get(id=pk)
    serializer = DestSerializer(instance=dest, data=request.data, partial=True)

    serializer.is_valid(raise_exception=True)
    serializer.save()
    Response(serializer.data)

    return Response('Update Successful')

@api_view(['DELETE'])
def destDelete(request, pk):
    dest = Destination.objects.get(id=pk)
    dest.delete()

    return Response('Delete Successful')
