import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

function ApplyForm() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    supabase.from('services').select('*').eq('id', serviceId).single().then(({ data }) => {
      setService(data);
      const initial = {};
      data?.form_fields?.forEach(field => initial[field.key] = '');
      setFormData(initial);
    });
  }, [serviceId]);

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const user = await supabase.auth.getUser();
    await supabase.from('applications').insert({
      user_id: user.data.user.id,
      service_id: service.id,
      form_data: formData,
    }).select().single();

    alert("Application submitted!");
    navigate('/'); // or `/dashboard`
  };

  if (!service) return <div>Loading...</div>;

  return (
    <div>
      <h2>Apply for: {service.name}</h2>
      {service.form_fields.map(field => (
        <div key={field.key}>
          <label>{field.label}</label>
          <input type={field.type} onChange={e => handleChange(field.key, e.target.value)} />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ApplyForm;
