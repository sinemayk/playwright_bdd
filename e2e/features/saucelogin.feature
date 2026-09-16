Feature: US001 Sauce Demo Login Test
Scenario: TC001 Gecerli Veri ile Login Olabilmeliyim
    Given kullanici login sayfasindadir
    When kullanici adi "standard_user" girer
    And sifre "secret_sauce" girer
    And login butonuna tiklar
    Then urunler sayfasi acilmalidir