from rest_framework.generics import (ListAPIView, RetrieveAPIView, 
    ListCreateAPIView, UpdateAPIView, DestroyAPIView)
from articles.models import Article
from .serializers import ArticleSerializer


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleCreateView(ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleUpdateView(UpdateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDeleteView(DestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
