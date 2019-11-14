from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField;
    user_name = models.CharField(max_length = 31);
    user_email= models.CharField(max_length = 63);
    
    def __str__(self):
        return self.user_text
    
    class Meta:
        db_table = 'user'
        verbose_name = verbose_name_plural = 'user info'
        