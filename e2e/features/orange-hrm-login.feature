@US002
Feature: US002 Open Source Login

@US002_TC01
Scenario: TC01 Gecerli kullanici girisi
    Given kullanici login sayfasina gider
    When gecerli kullanici adi ve sifre girer
    And logine tiklar
    Then basarili bir sekilde login oldugunu dogrular