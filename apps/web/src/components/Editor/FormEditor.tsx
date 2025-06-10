import { FormData } from '@/types/editor';
import { toast } from 'sonner';

interface FormEditorProps {
  data: FormData;
  setData: (data: FormData) => void;
}

export function FormEditor({ data, setData }: FormEditorProps) {
  const handleChange = (id: string, value: any) => {
    setData({
      ...data,
      fields: data.fields.map(field => 
        field.id === id ? { ...field, value } : field
      )
    });
  };

  const handleSubmit = () => {
    const isValid = data.fields.every(field => 
      !field.required || (field.value !== null && field.value !== '')
    );
    
    if (isValid) {
      toast.success('Form submitted successfully');
      const json = JSON.stringify(data, null, 2);
      console.log(json); // In real app, would trigger download
    } else {
      toast.error('Please fill all required fields');
    }
  };

  return (
    <div className="container mx-auto mt-8 max-w-4xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Form Editor</h2>
      <div className="space-y-4">
        {data.fields.map((field) => (
          <div key={field.id} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="ml-1 text-red-500">*</span>}
            </label>
            {field.type === 'text' && (
              <input
                type="text"
                value={field.value || ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />
            )}
            {field.type === 'number' && (
              <input
                type="number"
                value={field.value || ''}
                onChange={(e) => handleChange(field.id, e.target.valueAsNumber)}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />
            )}
            {field.type === 'date' && (
              <input
                type="date"
                value={field.value || ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />
            )}
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Submit & Export JSON
      </button>
    </div>
  );
}
