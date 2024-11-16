interface Person {
  id: number;
  name: string;
  phone: string;
  dob: Date;
  dobType: 'Exact' | 'Estimated';
  gender: 'Male' | 'Female' | 'Other';
  thalassemiaStatus: 'Major' | 'Minor' | 'Carrier' | 'Unknown';
  isNodal: boolean;
  landmark: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  relationship:
    | 'parent'
    | 'sibling'
    | 'spouse'
    | 'child'
    | 'grandchild'
    | 'uncle'
    | 'aunt'
    | 'nephew'
    | 'niece'
    | 'cousin'
    | null;

  relatives: Person[];
}
