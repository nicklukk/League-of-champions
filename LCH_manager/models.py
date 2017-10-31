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
    name = models.CharField(max_length=56, primary_key=True)
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
    surname = models.CharField(max_length=28, blank=True, default=None, null=True)
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


class GoalsToPlayer(models.Model):
    player = models.ForeignKey(Player)
    number_of_goals = models.IntegerField(default=1)

    def __str__(self):
        return "%s %s %s" % (self.id, self.player, self.number_of_goals)

    class Meta:
        verbose_name = "Goals to player"
        verbose_name_plural = "Goals to players"


class Statistic(models.Model):
    goals = models.IntegerField(default=0)
    yellow_cards = models.IntegerField(default=0)
    red_cards = models.IntegerField(default=0)
    position = models.IntegerField(default=50, null=True)
    bombardiers = models.ManyToManyField(GoalsToPlayer, blank=True, default=None)
    def __str__(self):
        return "%s %s %s" % (self.goals, self.yellow_cards, self.red_cards)

    class Meta:
        verbose_name = "Statistic"
        verbose_name_plural = "Statistics"


class Match(models.Model):
    host_team = models.ForeignKey(Team)
    guest_team = models.ForeignKey(Team, related_name='guests_of_match')
    host_stat = models.ForeignKey(Statistic, null=True, default=None)
    guest_stat = models.ForeignKey(Statistic, related_name='guests_stats', null=True, default=None)
    tour = models.CharField(max_length=32, null=True, default=None, blank=True)

    def __str__(self):
        return "%s %s" % (self.host_team, self.guest_team)

    class Meta:
        verbose_name = "Match"
        verbose_name_plural = "Matches"