class ApiService {
    static async fetchData(url, options = {}) {
      let options_ = {
        method: options.method,
        headers: {
            'Origin': 'http://localhost',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type',
            'Content-Type': 'application/json'
        },
        body: options.body
      }

      try {
        const response = await fetch(url, options_);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
      }
    }
  }
  
  export default ApiService;