import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    supabase.from('services').select('*').then(({ data }) => setServices(data));
  }, []);

  return (
    <div>
      <h1>Available Services</h1>
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <a href={`/apply/${service.id}`}>Apply Now</a>
        </div>
      ))}
    </div>
  );
}

export default Services;
