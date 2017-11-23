from django.contrib import admin
from .models import *


class PlayerInline(admin.TabularInline):
    model = Player
    extra = 0


class EventInline(admin.TabularInline):
    model = EventsToMatch
    extra = 0


class CountryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Country._meta.fields]

    class Meta:
        model = Country


admin.site.register(Country, CountryAdmin)


class CityAdmin(admin.ModelAdmin):
    list_display = [field.name for field in City._meta.fields]

    class Meta:
        model = City


admin.site.register(City, CityAdmin)


class PlayerAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Player._meta.fields]
    list_filter = ['position', 'team']
    search_fields = ['name', 'surname']

    class Meta:
        model = Player


admin.site.register(Player, PlayerAdmin)


class CoachAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Coach._meta.fields]

    class Meta:
        model = Coach


admin.site.register(Coach, CoachAdmin)


class TeamAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Team._meta.fields]
    inlines = [PlayerInline]
    list_filter = ['city__country']

    class Meta:
        model = Team


admin.site.register(Team, TeamAdmin)


class MatchAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Match._meta.fields]
    inlines = [EventInline]
    list_filter = ['host_team', 'guest_team']

    class Meta:
        model = Match


admin.site.register(Match, MatchAdmin)


class EventsAdmin(admin.ModelAdmin):
    list_display = [field.name for field in EventsToMatch._meta.fields]
    list_filter = ['match']

    class Meta:
        model = EventsToMatch


admin.site.register(EventsToMatch, EventsAdmin)


class ConflictsAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Conflicts._meta.fields]

    class Meta:
        model = Conflicts


admin.site.register(Conflicts, ConflictsAdmin)
