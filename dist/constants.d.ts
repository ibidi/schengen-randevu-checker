import { VizeMerkezi, CountryConfig } from './types';
export declare const SCHENGEN_ULKELERI: readonly ["almanya", "avusturya", "belcika", "cekyarepublik", "danimarka", "estonya", "finlandiya", "fransa", "hollanda", "isvec", "isvicre", "ispanya", "italya", "izlanda", "letonya", "litvanya", "luksemburg", "macaristan", "malta", "norvec", "polonya", "portekiz", "slovakya", "slovenya", "yunanistan", "bulgaristan", "hirvatistan"];
/**
 * Ülke konfigürasyonları - modul.json'dan entegre edildi
 */
export declare const COUNTRY_CONFIGS: CountryConfig[];
/**
 * Ülke ID'sine göre config getir
 */
export declare const getCountryConfig: (countryId: string) => CountryConfig | undefined;
/**
 * Ülke adına göre config getir
 */
export declare const getCountryConfigByName: (countryName: string) => CountryConfig | undefined;
export declare const VIZE_MERKEZLERI: Record<string, VizeMerkezi>;
