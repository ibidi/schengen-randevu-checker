import { SchengenCheckerOptions, KontrolOptions, RandevuKontrolSonuc, VizeMerkezi, CountryConfig } from './types';
export declare class SchengenChecker {
    private sehir;
    private rateLimit;
    private randevular;
    constructor(options?: SchengenCheckerOptions);
    /**
     * Schengen ülkesi kontrolü
     */
    schengenMi(ulke: string): boolean;
    /**
     * Müsait randevu kontrolü
     */
    musaitRandevuKontrol(ulke: string, options?: KontrolOptions): Promise<RandevuKontrolSonuc>;
    /**
     * Gerçek HTTP kontrolü
     */
    private gercekRandevuKontrol;
    /**
     * Toplu kontrol
     */
    topluRandevuKontrol(ulkeler: string[], options?: KontrolOptions): Promise<RandevuKontrolSonuc[]>;
    /**
     * Tüm ülkeleri kontrol et
     */
    tumUlkelerKontrol(options?: KontrolOptions): Promise<RandevuKontrolSonuc[]>;
    /**
     * Vize merkezi bilgisi
     */
    vizeMerkeziBilgisi(ulke: string): (VizeMerkezi & {
        ulke: string;
    }) | null;
    /**
     * Tüm vize merkezlerini listele
     */
    vizeMerkezleriListele(): {
        url: string;
        tip: "vfs-global" | "bls-international" | "konsolosluk";
        sehirler: string[];
        telefonlar: Record<string, string>;
        ulke: string;
    }[];
    /**
     * Şehre göre filtrele
     */
    sehreGoreVizeMerkezleri(sehir: string): {
        ulke: string;
        url: string;
        tip: "vfs-global" | "bls-international" | "konsolosluk";
        telefon: string;
    }[];
    /**
     * Tüm ülke konfigürasyonlarını getir
     */
    getAllCountries(): CountryConfig[];
    /**
     * Ülke ID'sine göre konfigürasyon getir
     */
    getCountryById(countryId: string): CountryConfig | undefined;
    /**
     * Ülke adına göre konfigürasyon getir
     */
    getCountryByName(countryName: string): CountryConfig | undefined;
    /**
     * Provider'a göre ülkeleri filtrele
     */
    getCountriesByProvider(provider: string): CountryConfig[];
    /**
     * Ülke bilgilerini flag ile birlikte listele
     */
    listCountriesWithFlags(): Array<{
        id: string;
        name: string;
        flag: string;
        provider: string;
    }>;
    private bekle;
}
