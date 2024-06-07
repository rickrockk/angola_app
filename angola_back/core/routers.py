from rest_framework.routers import DefaultRouter
from authentication.views import UserViewSet
from hospital.views import HospitalViewSet
from doctor.views import DoctorViewSet
from passport.views import PassportViewSet
from med_insurance.views import MedInsuranceViewSet
from insuranceApplication.views import InsAppViewSet
from passportApplication.views import PasAppViewSet
from realEstateInfo.views import RealEstateViewSet
from familyFarmingSupport.views import FamFarmViewSet
from vaccinationApplication.views import VacReqViewSet
from appointment.views import AppReqViewSet
from estateRequest.views import EstReqViewSet
router = DefaultRouter()

router.register("user", UserViewSet, basename='user')
router.register("hospital", HospitalViewSet, basename='hospital')
router.register("doctor", DoctorViewSet, basename='doctor')
router.register("passport", PassportViewSet, basename='passport')
router.register("insurance", MedInsuranceViewSet, basename='medinsurance')
router.register("insApp", InsAppViewSet, basename='insuranceapplication')
router.register("pasApp", PasAppViewSet, basename='passportapplication')
router.register("realEstate", RealEstateViewSet, basename='realestate')
router.register("famFarm", FamFarmViewSet, basename='familyfarming')
router.register("vacReq", VacReqViewSet, basename='vaccinationrequest')
router.register("appReq", AppReqViewSet, basename='appointmentrequest')
router.register("estReq", EstReqViewSet, basename='estReq')
