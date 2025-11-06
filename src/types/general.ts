// --- Shared Enums (should ideally be imported from your backend-generated types)
export type Role = "CLIENT" | "PROVIDER" | "ADMIN";
export type ServiceProviderRole = "INDIVIDUAL" | "COMPANY";

// --- User Types
export interface User {
  id: number;
  fullName: string;
  email: string;
  avatar?: string | null;
  role: Role;
  providerType?: ServiceProviderRole | null; // only if role = PROVIDER
  isEmailVerified: boolean;
  isVerified: boolean;
  createdAt: string; // ISO date
  updatedAt: string;
}

export enum AvailabilityStatus {
  AVAILABLE = "AVAILABLE",
  AWAY = "AWAY",
  OFFLINE = "OFFLINE",
}

export interface CloudinaryUploadResponse {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: string[]
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  original_filename: string
}

export interface ClientType {
  id: number;
  userId: number;
  fullname: string;
  description?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  street?: string | null;
  pfp?: string | null;
  phone?: string | null;
  createdAt: string; // ISO date
  updatedAt: string;

  user: User;  // relation to User
}

export interface ClientProfile extends BaseResponse<ClientType> {}

export interface ServiceProviderProfile extends BaseResponse<{ 
  id: number;
  userId: number;
  fullName: string;
  companyName?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  street?: string | null;
  pfp?: string | null;
  yearsOfExperience?: number | null;
  description?: string | null;
  providerType: ServiceProviderRole;
  availability: AvailabilityStatus;
  pastWork: string[];   // array of image URLs
  isSubscribed: boolean;
  createdAt: string; // ISO date
  updatedAt: string;

  user: User;  // relation to User
  // services: ServiceProviderService[]; // if you want type for this, see below
}> {}


// --- Auth Requests
export interface AuthRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends AuthRequest {
  fullName: string;
  role: Role;
  providerType?: ServiceProviderRole; // required if role = PROVIDER
}

export interface VerifyRequest {
  email: string;
  code: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}


// --- Base Response
export interface BaseResponse<T = unknown> {
  success: boolean;
  message: string;
  responseObject: T;
  statusCode: number;
}

// --- Auth Responses
export interface AuthResponse extends BaseResponse<{
  token: string;
  user: User;
}> {}

export interface LoginResponse extends BaseResponse<{
  token: string;
  user: User;
}> {}

// --- Cloudinary
export interface CloudinaryUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  original_filename: string;
}