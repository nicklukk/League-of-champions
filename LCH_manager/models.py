from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=50, primary_key=True)

    def __str__(self):
        return "%s" % self.name

    class Meta:
        verbose_name = "Country"
        verbose_name_plural = "Countries"


class City(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    country = models.ForeignKey(Country, blank=True, default=None, null=True)

    def __str__(self):
        return "%s" % (self.name)

    class Meta:
        verbose_name = "City"
        verbose_name_plural = "Cities"


class Position(models.Model):
    name = models.CharField(max_length=28, primary_key=True)

    def __str__(self):
        return "%s" % (self.name,)

    class Meta:
        verbose_name = "Position"
        verbose_name_plural = "Positions"


class Coach(models.Model):
    name = models.CharField(max_length=28)
    surname = models.CharField(max_length=28)

    def __str__(self):
        return "%s %s" % (self.name, self.surname)

    class Meta:
        verbose_name = "Coach"
        verbose_name_plural = "Coaches"


class Group(models.Model):
    index = models.CharField(max_length=1, primary_key=True)

    def __str__(self):
        return "%s" % (self.index,)

    class Meta:
        verbose_name = "Group"
        verbose_name_plural = "Groups"


class Team(models.Model):
    name = models.CharField(max_length=56)
    city = models.ForeignKey(City, blank=True, default=None, null=True)
    year_of_foundation = models.PositiveIntegerField(blank=True, default=None, null=True)
    coach = models.ForeignKey(Coach, blank=True, default=None, null=True)
    basket_index = models.PositiveIntegerField(default=0)
    group = models.ForeignKey(Group, blank=True, default=None, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True, default=None)

    def __str__(self):
        return "%s" % (self.name,)

    class Meta:
        verbose_name = "Team"
        verbose_name_plural = "Teams"


class Player(models.Model):
    name = models.CharField(max_length=28)
    surname = models.CharField(max_length=28)
    position = models.ForeignKey(Position, blank=True, default=None, null=True)
    team = models.ForeignKey(Team, blank=True, default=None, null=True)
    number = models.PositiveIntegerField(blank=True, default=None, null=True)
    is_a_captain = models.BooleanField(default=False)
    birthday = models.DateField(blank=True, default=None, null=True)
    motherland = models.ForeignKey(Country, blank=True, default=None, null=True)

    def __str__(self):
        return "%s %s" % (self.name, self.surname)

    class Meta:
        verbose_name = "Player"
        verbose_name_plural = "Players"


class Match(models.Model):
    host_team = models.ForeignKey(Team)
    guest_team = models.ForeignKey(Team, related_name='guests_of_match')
    host_goals_num = models.PositiveIntegerField(default=0)
    guest_goals_num = models.PositiveIntegerField(default=0)

    def __str__(self):
        return "%s %s" % (self.host_team, self.guest_team)

    class Meta:
        verbose_name = "Match"
        verbose_name_plural = "Matches"