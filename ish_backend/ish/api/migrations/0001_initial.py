# Generated by Django 4.2 on 2023-04-26 14:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='BaseUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='base_user_set', related_query_name='base_user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='base_user_set', related_query_name='base_user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='FacilityCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='FacilitySubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subcategories', to='api.facilitycategory')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Property',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('square_meters', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Guest',
            fields=[
                ('baseuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api.baseuser')),
            ],
            options={
                'abstract': False,
            },
            bases=('api.baseuser',),
        ),
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('profiles', models.ManyToManyField(related_name='reservations', to='api.profile')),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reservations', to='api.property')),
            ],
        ),
        migrations.AddField(
            model_name='property',
            name='region',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='properties', to='api.region'),
        ),
        migrations.CreateModel(
            name='FacilityItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price', models.PositiveIntegerField()),
                ('adult_only', models.BooleanField(default=False)),
                ('level', models.CharField(choices=[('IND', 'Individual'), ('ROM', 'Room'), ('PRP', 'Property')], max_length=3)),
                ('subcategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='api.facilitysubcategory')),
            ],
        ),
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('baseuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api.baseuser')),
                ('department', models.CharField(max_length=100)),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='staff_members', to='api.region')),
            ],
            options={
                'abstract': False,
            },
            bases=('api.baseuser',),
        ),
        migrations.CreateModel(
            name='PropertyFacilitySubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('available', models.BooleanField(default=True)),
                ('facility_subcategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property_facility_subcategories', to='api.facilitysubcategory')),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property_facility_subcategories', to='api.property')),
            ],
            options={
                'unique_together': {('property', 'facility_subcategory')},
            },
        ),
        migrations.CreateModel(
            name='PropertyFacilityItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('available', models.BooleanField(default=True)),
                ('facility_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property_facility_items', to='api.facilityitem')),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property_facility_items', to='api.property')),
            ],
            options={
                'unique_together': {('property', 'facility_item')},
            },
        ),
        migrations.CreateModel(
            name='PropertyFacilityCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('available', models.BooleanField(default=True)),
                ('facility_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property_facility_categories', to='api.facilitycategory')),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property_facility_categories', to='api.property')),
            ],
            options={
                'unique_together': {('property', 'facility_category')},
            },
        ),
        migrations.CreateModel(
            name='ProfileFacilitySubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('requested_call', models.BooleanField(default=False)),
                ('touched', models.BooleanField(default=False)),
                ('facility_subcategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_facility_subcategories', to='api.facilitysubcategory')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_facility_subcategories', to='api.profile')),
            ],
            options={
                'unique_together': {('profile', 'facility_subcategory')},
            },
        ),
        migrations.CreateModel(
            name='ProfileFacilityItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('selected', models.BooleanField(default=False)),
                ('facility_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_facility_items', to='api.facilityitem')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_facility_items', to='api.profile')),
            ],
            options={
                'unique_together': {('profile', 'facility_item')},
            },
        ),
        migrations.CreateModel(
            name='ProfileFacilityCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('requested_call', models.BooleanField(default=False)),
                ('touched', models.BooleanField(default=False)),
                ('facility_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_facility_categories', to='api.facilitycategory')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_facility_categories', to='api.profile')),
            ],
            options={
                'unique_together': {('profile', 'facility_category')},
            },
        ),
        migrations.CreateModel(
            name='Manager',
            fields=[
                ('baseuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api.baseuser')),
                ('regions', models.ManyToManyField(related_name='managers', to='api.region')),
            ],
            options={
                'abstract': False,
            },
            bases=('api.baseuser',),
        ),
    ]