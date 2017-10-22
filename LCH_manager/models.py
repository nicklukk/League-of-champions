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
    country = models.ForeignKey(Country)

    def __str__(self):
        return "%s %s" % (self.country.name, self.name)

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


class Player(models.Model):
    name = models.CharField(max_length=28)
    surname = models.CharField(max_length=28)
    position = models.ForeignKey(Position, blank=True, default=None)
    number = models.PositiveIntegerField(blank=True, default=None)
    birthday = models.DateField(blank=True, default=None)
    motherland = models.ForeignKey(Country, blank=True, default=None)

    def __str__(self):
        return "%s %s" % (self.name, self.surname)

    class Meta:
        verbose_name = "Player"
        verbose_name_plural = "Players"


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
    city = models.ForeignKey(City, blank=True, default=None)
    year_of_foundation = models.PositiveIntegerField(blank=True, default=None)
    coach = models.ForeignKey(Coach, blank=True, default=None)
    players = models.ManyToManyField(Player, blank=True, default=None)
    captain = models.ForeignKey(Player, related_name='captain_for_team', blank=True, default=None)
    basket_index = models.PositiveIntegerField(default=0)
    group = models.ForeignKey(Group, blank=True, default=None)

    def __str__(self):
        return "%s" % (self.name,)

    class Meta:
        verbose_name = "Team"
        verbose_name_plural = "Teams"


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