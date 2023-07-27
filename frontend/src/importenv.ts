// Author: Harshil Shah
const variables = {'backendURL': 'http://localhost:3000', 'frontendURL': 'http://localhost:3001'};

const entries = Object.entries(variables);
const envVariables: Record<string, string> = {};

entries.forEach(([key, value]) => {
    // const [key, value] = line.split('=');
    envVariables[key] = value || '';

});

export default envVariables;