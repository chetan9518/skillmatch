import axios from "axios";
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, 
  X, 
  Eye, 
  EyeOff, 
  Camera, 
  FileText, 
  Github, 
  Globe, 
  User, 
  Mail,
  CheckCircle,
  AlertCircle,
  Loader2,
  Edit3,
  Save,
  ArrowLeft
} from "lucide-react";

interface UserProfile {
  firstname: string;
  lastname: string;
  bio: string;
  skills: string;
  github: string;
  portfolio: string;
  email: string;
  resumelink?: string;
  profilelink?: string;
}

interface FormErrors {
  firstname?: string;
  lastname?: string;
  bio?: string;
  skills?: string;
  github?: string;
  portfolio?: string;
}

// Custom hook for form validation
const useFormValidation = () => {
  const validateForm = useCallback((data: Partial<UserProfile>): FormErrors => {
    const errors: FormErrors = {};

    if (!data.firstname?.trim()) {
      errors.firstname = "First name is required";
    } else if (data.firstname.length < 2) {
      errors.firstname = "First name must be at least 2 characters";
    }

    if (data.lastname && data.lastname.length < 2) {
      errors.lastname = "Last name must be at least 2 characters";
    }

    if (data.bio && data.bio.length > 500) {
      errors.bio = "Bio must be less than 500 characters";
    }

    if (data.github && !data.github.includes('github.com')) {
      errors.github = "Please enter a valid GitHub URL";
    }

    if (data.portfolio && !data.portfolio.includes('http')) {
      errors.portfolio = "Please enter a valid portfolio URL";
    }

    return errors;
  }, []);

  return { validateForm };
};


const ProfileImageUpload = ({ 
  profile, 
  firstname, 
  lastname, 
  onImageChange 
}: {
  profile: File | string | null;
  firstname: string;
  lastname: string;
  onImageChange: (file: File) => void;
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      onImageChange(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageChange(file);
    }
  };

  const imageUrl = profile instanceof File 
    ? URL.createObjectURL(profile)
    : profile || `https://ui-avatars.com/api/?name=${firstname}+${lastname}&background=random&size=200`;

  return (
    <div className="flex justify-center mb-6">
      <motion.div
        className={`relative group cursor-pointer ${isDragOver ? 'scale-105' : ''}`}
        whileHover={{ scale: 1.02 }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-zinc-700 shadow-xl relative">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Camera className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <motion.div
          className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Camera className="w-4 h-4" />
        </motion.div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </motion.div>
    </div>
  );
};


const FormInput = ({ 
  label, 
  icon: Icon, 
  error, 
  ...props 
}: {
  label: string;
  icon: any;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-2"
  >
    <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
      <Icon className="w-4 h-4" />
      {label}
    </label>
    <div className="relative">
      <input
        {...props}
        className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
          error 
            ? 'border-red-500 focus:border-red-500' 
            : 'border-zinc-200 dark:border-zinc-700 focus:border-blue-500'
        }`}
      />
      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -bottom-6 left-0 flex items-center gap-1 text-red-500 text-xs"
        >
          <AlertCircle className="w-3 h-3" />
          {error}
        </motion.div>
      )}
    </div>
  </motion.div>
);


const ResumeUpload = ({ 
  resume, 
  onResumeChange, 
  onResumeDelete,
  currentResumeUrl 
}: {
  resume: File | null;
  onResumeChange: (file: File) => void;
  onResumeDelete: () => void;
  currentResumeUrl?: string;
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === 'application/pdf') {
      onResumeChange(files[0]);
    } else {
      toast.error("Please upload a PDF file");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <FileText className="w-4 h-4" />
        Resume (PDF)
      </label>
      
      <div
        className={`border-2 border-dashed rounded-xl p-6 transition-all duration-200 cursor-pointer ${
          isDragOver 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
            : 'border-zinc-300 dark:border-zinc-600 hover:border-blue-400'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="text-center">
          {resume ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">{resume.name}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onResumeDelete();
                }}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ) : (
            <div className="space-y-2">
              <Upload className="w-8 h-8 text-zinc-400 mx-auto" />
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Drag & drop your resume here, or click to browse
              </p>
              <p className="text-xs text-zinc-500">PDF files only, max 10MB</p>
            </div>
          )}
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              onResumeChange(file);
            }
          }}
          className="hidden"
        />
      </div>
      
      {currentResumeUrl && !resume && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-blue-600"
        >
          <FileText className="w-4 h-4" />
          <a 
            href={currentResumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            View current resume
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};


const ProfileCompletion = ({ profile }: { profile: UserProfile }) => {
  const fields = [
    { key: 'firstname', label: 'First Name', value: profile.firstname },
    { key: 'lastname', label: 'Last Name', value: profile.lastname },
    { key: 'bio', label: 'Bio', value: profile.bio },
    { key: 'skills', label: 'Skills', value: profile.skills },
    { key: 'github', label: 'GitHub', value: profile.github },
    { key: 'portfolio', label: 'Portfolio', value: profile.portfolio },
  ];

  const completedFields = fields.filter(field => field.value?.trim()).length;
  const completionPercentage = Math.round((completedFields / fields.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
          Profile Completion
        </h3>
        <span className="text-2xl font-bold text-blue-600">
          {completionPercentage}%
        </span>
      </div>
      
      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3 mb-4">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${completionPercentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-sm">
        {fields.map((field) => (
          <div key={field.key} className="flex items-center gap-2">
            {field.value?.trim() ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <div className="w-4 h-4 border-2 border-zinc-300 dark:border-zinc-600 rounded-full" />
            )}
            <span className={field.value?.trim() ? 'text-green-700 dark:text-green-400' : 'text-zinc-500'}>
              {field.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};


export function Update() {
  const navigate = useNavigate();
  const { validateForm } = useFormValidation();
  
 
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email") || "";

  useEffect(() => {
    if (!token) {
      toast.error("Session Expired");
      navigate("/signin");
    }
  }, [navigate, token]);


  const [profile, setProfile] = useState<UserProfile>({
    firstname: "",
    lastname: "",
    bio: "",
    skills: "",
    github: "",
    portfolio: "",
    email: email,
  });

  const [profileImage, setProfileImage] = useState<File | string | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [currentResumeUrl, setCurrentResumeUrl] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

 
  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) return;

      try {
        const response = await axios.get("http://localhost:3000/user/fetchinfo", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.success) {
          const data = response.data.details;
          setProfile({
            firstname: data.firstname || "",
            lastname: data.lastname || "",
            bio: data.bio || "",
            skills: data.skills || "",
            github: data.github || "",
            portfolio: data.portfolio || "",
            email: data.email || email,
          });

          
          if (data.profilelink) {
            const profileRes = await axios.get("http://localhost:3000/user/profileurl", {
              params: { profilelink: data.profilelink },
              headers: { Authorization: `Bearer ${token}` },
            });
            if (profileRes.data.success) {
              setProfileImage(profileRes.data.profileUrl);
            }
          }

          if (data.resumelink) {
            const resumeRes = await axios.get("http://localhost:3000/user/resumeurl", {
              params: { resumelink: data.resumelink },
              headers: { Authorization: `Bearer ${token}` },
            });
            if (resumeRes.data.success) {
              setCurrentResumeUrl(resumeRes.data.resumeUrl);
            }
          }

          setProfileLoaded(true);
        }
      } catch (error) {
        toast.error("Failed to fetch profile data");
        console.error(error);
      }
    };

    fetchUserData();
  }, [token, email]);

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm(profile);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    const formData = new FormData();
    Object.entries(profile).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (profileImage instanceof File) {
      formData.append("profile", profileImage);
    }

    if (resume) {
      formData.append("resume", resume);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/user/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Profile updated successfully!");
        navigate("/dashboard");
      } else {
        toast.error(response.data.msg || "Update failed");
      }
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

 
  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!profileLoaded) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-zinc-800 dark:text-white">
            Update Profile
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Keep your information up to date
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </motion.button>
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Image and Basic Info */}
          <div className="space-y-6">
            <ProfileImageUpload
              profile={profileImage}
              firstname={profile.firstname}
              lastname={profile.lastname}
              onImageChange={setProfileImage}
            />
            
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">
                {profile.firstname} {profile.lastname}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">{profile.email}</p>
            </div>
          </div>

          {/*profiledetils */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileCompletion profile={profile} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-zinc-800 dark:text-white">Bio</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {profile.bio || "No bio added yet"}
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-zinc-800 dark:text-white">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills ? (
                    profile.skills.split(',').map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {skill.trim()}
                      </span>
                    ))
                  ) : (
                    <span className="text-zinc-500 text-sm">No skills added yet</span>
                  )}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-zinc-800 dark:text-white">Links</h3>
                <div className="space-y-2">
                  {profile.github ? (
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Profile
                    </a>
                  ) : null}
                  
                  {profile.portfolio ? (
                    <a
                      href={profile.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <Globe className="w-4 h-4" />
                      Portfolio
                    </a>
                  ) : null}
                  
                  {currentResumeUrl ? (
                    <a
                      href={currentResumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <FileText className="w-4 h-4" />
                      Resume
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowEditForm(!showEditForm)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              <Edit3 className="w-4 h-4" />
              {showEditForm ? "Hide Edit Form" : "Edit Profile"}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/*editfom*/}
      <AnimatePresence>
        {showEditForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <Edit3 className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">
                  Edit Profile Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="First Name"
                  icon={User}
                  type="text"
                  value={profile.firstname}
                  onChange={(e) => handleInputChange('firstname', e.target.value)}
                  error={errors.firstname}
                  required
                />

                <FormInput
                  label="Last Name"
                  icon={User}
                  type="text"
                  value={profile.lastname}
                  onChange={(e) => handleInputChange('lastname', e.target.value)}
                  error={errors.lastname}
                />

                <div className="md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      <FileText className="w-4 h-4" />
                      Bio
                    </label>
                    <textarea
                      value={profile.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      rows={4}
                      className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${
                        errors.bio 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-zinc-200 dark:border-zinc-700 focus:border-blue-500'
                      }`}
                      placeholder="Tell us about yourself..."
                    />
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>{errors.bio || ""}</span>
                      <span>{profile.bio.length}/500</span>
                    </div>
                  </motion.div>
                </div>

                <div className="md:col-span-2">
                  <FormInput
                    label="Skills (comma separated)"
                    icon={CheckCircle}
                    type="text"
                    value={profile.skills}
                    onChange={(e) => handleInputChange('skills', e.target.value)}
                    error={errors.skills}
                    placeholder="React, Node.js, Python, etc."
                  />
                </div>

                <FormInput
                  label="GitHub URL"
                  icon={Github}
                  type="url"
                  value={profile.github}
                  onChange={(e) => handleInputChange('github', e.target.value)}
                  error={errors.github}
                  placeholder="https://github.com/username"
                />

                <FormInput
                  label="Portfolio URL"
                  icon={Globe}
                  type="url"
                  value={profile.portfolio}
                  onChange={(e) => handleInputChange('portfolio', e.target.value)}
                  error={errors.portfolio}
                  placeholder="https://yourportfolio.com"
                />

                <div className="md:col-span-2">
                  <ResumeUpload
                    resume={resume}
                    onResumeChange={setResume}
                    onResumeDelete={() => setResume(null)}
                    currentResumeUrl={currentResumeUrl}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  {loading ? "Saving..." : "Save Changes"}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => setShowEditForm(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}