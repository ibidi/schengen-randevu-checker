/**
 * Example: Using v2.1.0 New Features
 * 
 * This example demonstrates the new features added in v2.1.0:
 * - Contact Information
 * - Visa Requirements
 * - Document Checklist
 * - Comprehensive Country Info
 */

const { SchengenChecker } = require('./dist/index');

async function main() {
  const checker = new SchengenChecker();

  console.log('🎉 Schengen Checker v2.1.0 - New Features Demo\n');

  // ============================================
  // 1. Contact Information
  // ============================================
  console.log('📞 1. Contact Information\n');
  
  // Get all contacts for France
  const franceContacts = checker.getContactInfo('fr');
  console.log(`France has ${franceContacts.length} visa centers:`);
  franceContacts.forEach(contact => {
    console.log(`\n  📍 ${contact.city.toUpperCase()}`);
    console.log(`     Address: ${contact.address}`);
    console.log(`     Phone: ${contact.phone}`);
    console.log(`     Email: ${contact.email}`);
    console.log(`     Hours: ${contact.workingHours}`);
  });

  // Get specific city contact
  console.log('\n  🎯 Ankara Only:');
  const ankaraContact = checker.getContactInfo('de', 'ankara');
  if (ankaraContact.length > 0) {
    console.log(`     ${ankaraContact[0].phone} - ${ankaraContact[0].address}`);
  }

  // ============================================
  // 2. Visa Requirements
  // ============================================
  console.log('\n\n📋 2. Visa Requirements\n');
  
  const requirements = checker.getVisaRequirements('fr', 'tourist');
  if (requirements) {
    console.log(`  Country: ${requirements.country.toUpperCase()}`);
    console.log(`  Visa Type: ${requirements.visaType}`);
    console.log(`  Processing Time: ${requirements.processingTime}`);
    console.log(`  Fee: ${requirements.visaFee}`);
    console.log(`  Validity: ${requirements.validityPeriod}`);
    console.log(`  Stay Duration: ${requirements.stayDuration}`);
    console.log(`\n  Required Documents (${requirements.requiredDocuments.length}):`);
    requirements.requiredDocuments.forEach((doc, i) => {
      console.log(`     ${i + 1}. ${doc}`);
    });
    
    if (requirements.additionalInfo) {
      console.log(`\n  💡 Additional Info:`);
      requirements.additionalInfo.forEach(info => {
        console.log(`     - ${info}`);
      });
    }
  }

  // ============================================
  // 3. Document Checklist
  // ============================================
  console.log('\n\n✅ 3. Document Checklist\n');
  
  const checklist = checker.getDocumentChecklist('de', 'tourist');
  if (checklist) {
    console.log(`  ${checklist.country.toUpperCase()} - ${checklist.visaType}\n`);
    
    console.log(`  📌 Mandatory Documents (${checklist.mandatory.length}):`);
    checklist.mandatory.forEach((doc, i) => {
      console.log(`     ${i + 1}. ${doc.name}`);
      console.log(`        ${doc.description}`);
      if (doc.format) console.log(`        Format: ${doc.format}`);
      if (doc.quantity) console.log(`        Quantity: ${doc.quantity}`);
    });
    
    if (checklist.optional.length > 0) {
      console.log(`\n  📎 Optional Documents (${checklist.optional.length}):`);
      checklist.optional.forEach((doc, i) => {
        console.log(`     ${i + 1}. ${doc.name} - ${doc.description}`);
      });
    }
    
    console.log(`\n  💡 Tips:`);
    checklist.tips.forEach(tip => {
      console.log(`     - ${tip}`);
    });
  }

  // ============================================
  // 4. Comprehensive Country Info
  // ============================================
  console.log('\n\n🌍 4. Comprehensive Country Info\n');
  
  const fullInfo = checker.getCountryFullInfo('fr');
  console.log(`  Country: ${fullInfo.config?.flag} ${fullInfo.config?.name}`);
  console.log(`  Provider: ${fullInfo.config?.provider}`);
  console.log(`  Booking URL: ${fullInfo.config?.bookingBaseUrl}`);
  console.log(`\n  Data Availability:`);
  console.log(`     Config: ${fullInfo.config ? '✓' : '✗'}`);
  console.log(`     Contacts: ${fullInfo.contacts.length} centers`);
  console.log(`     Requirements: ${fullInfo.requirements ? '✓' : '✗'}`);
  console.log(`     Checklist: ${fullInfo.checklist ? '✓' : '✗'}`);
  console.log(`     Complete Info: ${fullInfo.hasFullInfo ? '✓ Yes' : '✗ No'}`);

  // ============================================
  // 5. Compare Multiple Countries
  // ============================================
  console.log('\n\n🔄 5. Compare Countries\n');
  
  const countries = ['fr', 'de', 'nl'];
  console.log('  Comparison Table:\n');
  console.log('  Country | Processing Time | Fee        | Contacts');
  console.log('  --------|-----------------|------------|----------');
  
  countries.forEach(countryId => {
    const req = checker.getVisaRequirements(countryId);
    const contacts = checker.getContactInfo(countryId);
    const config = checker.getCountryById(countryId);
    
    if (req && config) {
      console.log(`  ${config.flag} ${config.name.padEnd(6)} | ${req.processingTime.padEnd(15)} | ${req.visaFee.padEnd(10)} | ${contacts.length} centers`);
    }
  });

  console.log('\n\n✨ All features demonstrated successfully!');
  console.log('\n📦 Install: npm install schengen-randevu-checker@2.1.0');
  console.log('📚 Docs: https://github.com/ibidi/schengen-randevu-checker');
}

main().catch(console.error);
