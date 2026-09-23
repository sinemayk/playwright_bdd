@Login
Feature: US001 Sauce Demo Login Test

@TC01 @smoke
Scenario: TC01 Gecerli kullanici girisi
    Given kullanici login sayfasindadir
    When kullanici adi "standard" turunde girer
    And sifre girer
    And login butonuna tiklar
    Then urunler sayfasi acilmalidir

@TC02
Scenario: TC02 Gecerli kullanici girisi
    Given kullanici login sayfasindadir
    When kullanici adi "error" turunde girer
    And sifre girer
    And login butonuna tiklar
    Then urunler sayfasi acilmalidir

@TC03 @smoke
Scenario: TC03 Gecerli kullanici girisi
    Given kullanici login sayfasindadir
    When kullanici adi "problem" turunde girer
    And sifre girer
    And login butonuna tiklar
    Then urunler sayfasi acilmalidir