@Login
Feature: US001 Sauce Demo Login Test

@TC01 @smoke
Scenario: TC01 Gecerli kullanici girisi
    Given kullanici login sayfasindadir
    When kullanici adi "standard_user" girer
    And sifre "secret_sauce" girer
    And login butonuna tiklar
    Then urunler sayfasi acilmalidir

@TC02
Scenario: TC02 Gecerli kullanici girisi
    Given kullanici login sayfasindadir
    When kullanici adi "error_user" girer
    And sifre "secret_sauce" girer
    And login butonuna tiklar
    Then urunler sayfasi acilmalidir

@TC03 @smoke
Scenario: TC03 Gecerli kullanici girisi
    Given kullanici login sayfasindadir
    When kullanici adi "problem_user" girer
    And sifre "secret_sauce" girer
    And login butonuna tiklar
    Then urunler sayfasi acilmalidir