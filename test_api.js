
async function testApi() {
  try {
    const response = await fetch('https://api.tgaystechnology.com/api_v1/menus');
    if (!response.ok) {
      console.error('Response not ok:', response.status);
      return;
    }
    const data = await response.json();
    console.log('Is array?', Array.isArray(data));
    console.log('Length:', data.length);
    if (data.length > 0) {
      console.log('First item keys:', Object.keys(data[0]));
      // Check subPages
      const subPages = data[0].subPages;
      console.log('First item subPages type:', typeof subPages, Array.isArray(subPages));
      if (Array.isArray(subPages) && subPages.length > 0) {
        console.log('First subPage keys:', Object.keys(subPages[0]));
      }
    }
  } catch (e) {
    console.error('Fetch failed:', e);
  }
}

testApi();
