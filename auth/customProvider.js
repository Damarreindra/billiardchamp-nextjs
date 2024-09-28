export const CustomProvider = {
  id: "custom",
  name: "Custom Provider",
  type: "credentials",
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    const res = await fetch("http://localhost:5022/api/account/login", {
      method: 'POST',
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
      headers: { "Content-Type": "application/json" }
    });
  
    const user = await res.json();
  
    if (res.ok && user && user.token) {
      return {
        id: user.id,         
        name: user.name,     
        email: user.email,   
        token: user.token    
      };
    }
  
    return null; 
  }
  
};
