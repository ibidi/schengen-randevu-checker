import { SchengenChecker } from './src/SchengenChecker';

async function test() {
  console.log('🧪 TypeScript Modül Test Başlıyor...\n');

  const checker = new SchengenChecker({ 
    sehir: 'ankara',
    rateLimit: 2000 
  });

  // Test 1: Yeni - Tüm ülke konfigürasyonları
  console.log('📍 Test 1: Tüm Ülke Konfigürasyonları (modul.json\'dan)');
  const allCountries = checker.getAllCountries();
  console.log(`Toplam ${allCountries.length} ülke konfigürasyonu:`);
  allCountries.slice(0, 5).forEach(c => {
    console.log(`  ${c.flag} ${c.name} (${c.id}) - ${c.provider}`);
  });
  console.log('');

  // Test 2: Yeni - Ülke ID ile arama
  console.log('📍 Test 2: Ülke ID ile Arama');
  const france = checker.getCountryById('fr');
  console.log('FR:', france);
  const germany = checker.getCountryById('de');
  console.log('DE:', germany);
  console.log('');

  // Test 3: Yeni - Ülke adı ile arama
  console.log('📍 Test 3: Ülke Adı ile Arama');
  const spain = checker.getCountryByName('İspanya');
  console.log('İspanya:', spain);
  console.log('');

  // Test 4: Yeni - Provider'a göre filtreleme
  console.log('📍 Test 4: VFS Global Kullanan Ülkeler');
  const vfsCountries = checker.getCountriesByProvider('VFS Global');
  console.log(`${vfsCountries.length} ülke VFS Global kullanıyor:`);
  vfsCountries.slice(0, 5).forEach(c => console.log(`  - ${c.flag} ${c.name}`));
  console.log('');

  // Test 5: Yeni - Flag'li liste
  console.log('📍 Test 5: Ülkeler Flag ile');
  const countriesWithFlags = checker.listCountriesWithFlags();
  console.log('İlk 10 ülke:');
  countriesWithFlags.slice(0, 10).forEach(c => {
    console.log(`  ${c.flag} ${c.name} - ${c.provider}`);
  });
  console.log('');

  // Test 6: Vize merkezi bilgisi (eski sistem)
  console.log('📍 Test 6: Vize merkezi bilgisi (eski sistem)');
  const merkez = checker.vizeMerkeziBilgisi('hollanda');
  console.log('Merkez:', merkez);
  console.log('');

  // Test 7: Şehre göre filtre
  console.log('📍 Test 7: Ankara\'daki vize merkezleri');
  const ankaraMerkezleri = checker.sehreGoreVizeMerkezleri('ankara');
  console.log(`Toplam ${ankaraMerkezleri.length} merkez bulundu`);
  console.log('');

  // Test 8: Tek ülke kontrolü
  console.log('📍 Test 8: Fransa randevu kontrolü');
  const fransa = await checker.musaitRandevuKontrol('fransa');
  console.log('Sonuç:', fransa);
  console.log('');

  console.log('✅ Tüm testler tamamlandı!');
}

test().catch(console.error);
