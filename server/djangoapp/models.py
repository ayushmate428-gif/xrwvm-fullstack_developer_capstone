from django.db import models
from django.utils.timezone import now
from django.core.validators import MaxValueValidator, MinValueValidator

class CarMake(models.Model):
name = models.CharField(max_length=100)
description = models.CharField(max_length=200)

```
def __str__(self):
    return self.name
```

class CarModel(models.Model):
SEDAN = 'SEDAN'
SUV = 'SUV'
WAGON = 'WAGON'
HATCHBACK = 'HATCHBACK'
CONVERTIBLE = 'CONVERTIBLE'
TRUCK = 'TRUCK'

```
CAR_TYPES = [
    (SEDAN, 'Sedan'),
    (SUV, 'SUV'),
    (WAGON, 'Wagon'),
    (HATCHBACK, 'Hatchback'),
    (CONVERTIBLE, 'Convertible'),
    (TRUCK, 'Truck'),
]

car_make = models.ForeignKey(CarMake, on_delete=models.CASCADE)
name = models.CharField(max_length=100)
type = models.CharField(max_length=20, choices=CAR_TYPES)
year = models.IntegerField(
    validators=[MinValueValidator(2015), MaxValueValidator(2023)]
)

def __str__(self):
    return self.name
```
