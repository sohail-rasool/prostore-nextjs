import { cn } from '@/lib/utils';

const ProductPrice = ({
  value,
  className,
}: {
  value: number | string; // allow string
  className?: string;
}) => {
  // Ensures two decimal places
   // Convert to number safely
   const numericValue = typeof value === 'number' ? value : Number(value);
  const stringValue = numericValue.toFixed(2); 
  // Split into integer and decimal parts
  const [intValue, floatValue] = stringValue.split('.'); 

  return (
    <p className={cn('text-2xl', className)}>
      <span className='text-xs align-super'>$</span>
      {intValue}
      <span className='text-xs align-super'>.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;