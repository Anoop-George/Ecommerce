from django.db import models
from PIL import Image

class Product(models.Model):
    name = models.CharField(max_length = 100)
    price = models.IntegerField()
    image = models.ImageField(upload_to='images',blank=True,null=True)
    importance = models.BooleanField(default=False)
    data = models.TextField(blank=True,null=True)
    quantity=models.IntegerField(default=1)

    def __str__(self):
        return self.name
    def save(self,*args, **kwargs):
        super().save(*args, **kwargs)
        if self.image:
            pic = Image.open(self.image.path)
            if pic.height > 150 or pic.width > 150:
                output_size = (300, 300)
                pic.thumbnail(output_size)
                pic.save(self.image.path)
            super(Product, self).save(*args, **kwargs)

            