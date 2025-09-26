class CommissionForm {
    constructor() {
        this.currentTab = 'commission';
        this.forms = {
            commission: document.getElementById('commission-form'),
            inquiry: document.getElementById('inquiry-form'),
            support: document.getElementById('support-form')
        };

        this.submitBtns = {
            commission: document.getElementById('submit-btn'),
            inquiry: document.getElementById('inquiry-submit-btn'),
            support: document.getElementById('support-submit-btn')
        };

        this.progressFill = document.getElementById('progress-fill');
        this.validationSummary = document.getElementById('validation-summary');
        this.errorList = document.getElementById('error-list');

        this.availableSlots = 0;

        // Configuration for file upload support
        // Set this to true when you upgrade your API plan
        this.fileUploadEnabled = true;

        // Validation rules for each tab
        this.validationRules = {
            commission: {
                'client-name': {
                    required: true,
                    minLength: 2,
                    maxLength: 50,
                    pattern: /^[a-zA-Z\s\-']+$/,
                    message: 'Name must contain only letters, spaces, hyphens, and apostrophes'
                },
                'client-email': {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address'
                },
                'commission-type': {
                    required: true,
                    message: 'Please select a commission type'
                },
                'commission-details': {
                    required: true,
                    minLength: 20,
                    maxLength: 1000,
                    message: 'Details must be between 20-1000 characters'
                },
                'terms-agreement': {
                    required: true,
                    message: 'You must agree to the terms of service'
                }
            },
            inquiry: {
                'inquiry-name': {
                    required: true,
                    minLength: 2,
                    maxLength: 50,
                    pattern: /^[a-zA-Z\s\-']+$/,
                    message: 'Name must contain only letters, spaces, hyphens, and apostrophes'
                },
                'inquiry-email': {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address'
                },
                'inquiry-subject': {
                    required: true,
                    maxLength: 100,
                    message: 'Subject is required'
                },
                'inquiry-message': {
                    required: true,
                    minLength: 10,
                    maxLength: 1000,
                    message: 'Message must be between 10-1000 characters'
                }
            },
            support: {
                'support-name': {
                    required: true,
                    minLength: 2,
                    maxLength: 50,
                    pattern: /^[a-zA-Z\s\-']+$/,
                    message: 'Name must contain only letters, spaces, hyphens, and apostrophes'
                },
                'support-email': {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address'
                },
                'support-category': {
                    required: true,
                    message: 'Please select a support category'
                },
                'support-priority': {
                    required: true,
                    message: 'Please select a priority level'
                },
                'support-description': {
                    required: true,
                    minLength: 20,
                    maxLength: 1000,
                    message: 'Description must be between 20-1000 characters'
                }
            }
        };

        this.init();
    }

    init() {
        this.updateFormStatus();
        this.setupEventListeners();
        this.setupFileUpload();
        this.updateProgress();
        this.initTabSwitching();
    }

    initTabSwitching() {
        // Set up tab switching functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const tabName = button.getAttribute('data-tab');
                this.switchTab(tabName);
            });
        });
    }

    switchTab(tabName) {
        // Update current tab
        this.currentTab = tabName;

        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');

        // Update form header based on tab
        const formHeader = document.querySelector('.form-header h1');
        const formSubtitle = document.querySelector('.form-subtitle');

        switch (tabName) {
            case 'commission':
                formHeader.textContent = 'Commission Request';
                formSubtitle.textContent = 'Transform your ideas into beautiful artwork';
                break;
            case 'inquiry':
                formHeader.textContent = 'General Inquiry';
                formSubtitle.textContent = 'Ask us anything about our services';
                break;
            case 'support':
                formHeader.textContent = 'Customer Support';
                formSubtitle.textContent = 'We\'re here to help solve your issues';
                break;
        }

        // Reset progress and validation for new tab
        this.updateProgress();
        this.hideValidationSummary();
    }

    updateFormStatus() {
        const statusIndicator = document.getElementById('status-indicator');
        const statusText = document.getElementById('status-text');

        if (this.availableSlots > 0) {
            statusIndicator.className = 'status-indicator status-open';
            statusText.textContent = `Open (${this.availableSlots} slots available)`;
            if (this.submitBtns.commission) {
                this.submitBtns.commission.disabled = false;
            }
        } else {
            statusIndicator.className = 'status-indicator status-closed';
            statusText.textContent = 'Currently Closed';
            if (this.submitBtns.commission) {
                this.submitBtns.commission.disabled = true;
            }
        }
    }

    setupEventListeners() {
        // Set up validation for all tabs
        Object.keys(this.validationRules).forEach(tabName => {
            const rules = this.validationRules[tabName];
            Object.keys(rules).forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field) {
                    field.addEventListener('blur', () => this.validateField(fieldId, tabName));
                    field.addEventListener('input', () => {
                        this.clearFieldError(fieldId);
                        // Update progress immediately on input
                        this.updateProgress();

                        // Character counter for textareas
                        if (field.tagName.toLowerCase() === 'textarea') {
                            this.updateCharacterCount(fieldId);
                        }
                    });

                    // For select elements and checkboxes, also listen to change events
                    if (field.tagName.toLowerCase() === 'select' || field.type === 'checkbox') {
                        field.addEventListener('change', () => {
                            this.clearFieldError(fieldId);
                            this.updateProgress();
                        });
                    }
                }
            });
        });

        // Form submissions
        Object.keys(this.forms).forEach(tabName => {
            const form = this.forms[tabName];
            if (form) {
                form.addEventListener('submit', (e) => this.handleSubmit(e, tabName));
            }
        });
    }

    setupFileUpload() {
        const fileInput = document.getElementById('file-input');
        const uploadArea = document.getElementById('file-upload-area');
        const filePreview = document.getElementById('file-preview');

        if (!fileInput || !uploadArea) return;

        // Drag and drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                fileInput.files = files;
                this.validateAndPreviewFile(files[0]);
                // Update progress when file is added
                this.updateProgress();
            }
        });

        // File input change
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                this.validateAndPreviewFile(e.target.files[0]);
                // Update progress when file is selected
                this.updateProgress();
            } else {
                // Update progress when file is removed
                this.updateProgress();
            }
        });
    }

    validateAndPreviewFile(file) {
        const fileError = document.getElementById('file-error');
        const filePreview = document.getElementById('file-preview');
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        // Clear previous errors
        this.hideError('file-error');

        // Validate file type
        if (!allowedTypes.includes(file.type)) {
            this.showError('file-error', 'Please upload only JPEG, JPG, or PNG images');
            this.clearFileInput();
            return;
        }

        // Validate file size
        if (file.size > maxSize) {
            this.showError('file-error', 'File size must be less than 5MB');
            this.clearFileInput();
            return;
        }

        // Preview file
        const reader = new FileReader();
        reader.onload = (e) => {
            filePreview.innerHTML = `
                <img src="${e.target.result}" alt="Preview" style="max-width: 100%; height: auto;">
                <div class="file-info">
                    <span>${file.name} (${this.formatFileSize(file.size)})</span>
                    <button type="button" class="remove-file" onclick="window.commissionForm.clearFileInput()">
                        <i class="fas fa-times"></i> Remove
                    </button>
                </div>
            `;
            filePreview.style.display = 'block';
            filePreview.style.textAlign = 'center';
        };
        reader.readAsDataURL(file);
    }

    clearFileInput() {
        const fileInput = document.getElementById('file-input');
        const filePreview = document.getElementById('file-preview');

        if (fileInput) fileInput.value = '';
        if (filePreview) {
            filePreview.style.display = 'none';
            filePreview.innerHTML = '';
        }
        // Update progress when file is cleared
        this.updateProgress();
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    updateCharacterCount(fieldId) {
        const field = document.getElementById(fieldId);

        // Map field IDs to their corresponding count element IDs
        const countElementMap = {
            'commission-details': 'details-count',
            'inquiry-message': 'inquiry-message-count',
            'support-description': 'support-description-count'
        };

        const countElementId = countElementMap[fieldId] || `${fieldId}-count`;
        const countElement = document.getElementById(countElementId);

        if (!field || !countElement) {
            console.log(`Character count elements not found: field=${fieldId}, countElement=${countElementId}`);
            return;
        }

        const currentLength = field.value.length;
        const maxLength = parseInt(field.getAttribute('maxlength')) || 1000;

        countElement.textContent = `${currentLength} / ${maxLength} characters`;

        if (currentLength > maxLength * 0.9) {
            countElement.className = 'character-count error';
        } else if (currentLength > maxLength * 0.7) {
            countElement.className = 'character-count warning';
        } else {
            countElement.className = 'character-count';
        }
    }

    // NEW: Enhanced field validation for real-time progress updates
    isFieldComplete(fieldId, tabName) {
        const field = document.getElementById(fieldId);
        const rule = this.validationRules[tabName][fieldId];

        if (!field || !rule) return false;

        // Special handling for checkbox
        if (fieldId === 'terms-agreement') {
            return field.checked;
        }

        // For other fields, check if they meet basic requirements
        const value = field.value.trim();

        // Must have a value if required
        if (rule.required && !value) {
            return false;
        }

        // If field is empty and not required, consider it complete
        if (!rule.required && !value) {
            return true;
        }

        // Check minimum length
        if (rule.minLength && value.length < rule.minLength) {
            return false;
        }

        // Check maximum length
        if (rule.maxLength && value.length > rule.maxLength) {
            return false;
        }

        // Check pattern (only if field has value)
        if (rule.pattern && value && !rule.pattern.test(value)) {
            return false;
        }

        return true;
    }

    validateField(fieldId, tabName) {
        const field = document.getElementById(fieldId);
        const rule = this.validationRules[tabName][fieldId];

        if (!field || !rule) return true;

        let isValid = true;
        let errorMessage = '';

        // Special validation for checkbox first
        if (fieldId === 'terms-agreement') {
            if (!field.checked) {
                isValid = false;
                errorMessage = rule.message;
            }
        } else {
            // Required validation for other fields
            if (rule.required && !field.value.trim()) {
                isValid = false;
                errorMessage = `${this.getFieldLabel(fieldId)} is required`;
            }

            // Length validation
            if (isValid && rule.minLength && field.value.length < rule.minLength) {
                isValid = false;
                errorMessage = `${this.getFieldLabel(fieldId)} must be at least ${rule.minLength} characters`;
            }

            if (isValid && rule.maxLength && field.value.length > rule.maxLength) {
                isValid = false;
                errorMessage = `${this.getFieldLabel(fieldId)} must be no more than ${rule.maxLength} characters`;
            }

            // Pattern validation
            if (isValid && rule.pattern && field.value && !rule.pattern.test(field.value)) {
                isValid = false;
                errorMessage = rule.message;
            }
        }

        // Update field appearance and show/hide messages
        const errorIdMap = {
            'client-name': 'name-error',
            'client-email': 'email-error',
            'commission-type': 'commission-error',
            'commission-details': 'details-error',
            'terms-agreement': 'terms-error'
        };

        const successIdMap = {
            'client-name': 'name-success',
            'client-email': 'email-success',
            'commission-type': 'commission-success',
            'commission-details': 'details-success',
            'terms-agreement': 'terms-success'
        };

        const errorId = errorIdMap[fieldId] || `${fieldId}-error`;
        const successId = successIdMap[fieldId] || `${fieldId}-success`;

        if (isValid && (field.value || field.checked)) {
            field.classList.remove('invalid');
            field.classList.add('valid');
            this.hideError(errorId);
            this.showSuccess(successId);
        } else if (!isValid) {
            field.classList.remove('valid');
            field.classList.add('invalid');
            this.showError(errorId, errorMessage);
            this.hideSuccess(successId);
        } else {
            field.classList.remove('valid', 'invalid');
            this.hideError(errorId);
            this.hideSuccess(successId);
        }

        // Update progress after validation
        this.updateProgress();

        return isValid;
    }

    validateAllFields(tabName) {
        const errors = [];
        let allValid = true;
        const rules = this.validationRules[tabName];

        Object.keys(rules).forEach(fieldId => {
            if (!this.validateField(fieldId, tabName)) {
                allValid = false;
                errors.push(this.getFieldLabel(fieldId));
            }
        });

        this.updateValidationSummary(errors);
        return allValid;
    }

    updateValidationSummary(errors) {
        if (errors.length > 0) {
            this.errorList.innerHTML = errors.map(error => `<li>${error} field has errors</li>`).join('');
            this.validationSummary.style.display = 'block';
            this.validationSummary.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            this.validationSummary.style.display = 'none';
        }
    }

    hideValidationSummary() {
        if (this.validationSummary) {
            this.validationSummary.style.display = 'none';
        }
    }

    // IMPROVED: Enhanced progress calculation with real-time updates
    updateProgress() {
        const rules = this.validationRules[this.currentTab];
        const fields = Object.keys(rules);
        let completedFields = 0;
        let totalWeight = 0;
        let completedWeight = 0;

        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                // Assign weights to different field types for more nuanced progress
                let weight = 1;
                if (fieldId.includes('details') || fieldId.includes('message') || fieldId.includes('description')) {
                    weight = 2; // Text areas get more weight
                } else if (fieldId === 'terms-agreement') {
                    weight = 0.5; // Checkbox gets less weight
                }

                totalWeight += weight;

                // Check if field is complete using the new method
                if (this.isFieldComplete(fieldId, this.currentTab)) {
                    completedFields++;
                    completedWeight += weight;
                }
            }
        });

        // Calculate progress using weighted completion
        const progress = totalWeight > 0 ? Math.round((completedWeight / totalWeight) * 100) : 0;

        // Update progress bar with smooth animation
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');

        if (progressFill) {
            // Add transition if not already present
            if (!progressFill.style.transition) {
                progressFill.style.transition = 'width 0.3s ease-in-out';
            }
            progressFill.style.width = `${progress}%`;

            // Add visual feedback based on progress level
            progressFill.className = 'progress-fill';
            if (progress >= 100) {
                progressFill.classList.add('complete');
            } else if (progress >= 75) {
                progressFill.classList.add('near-complete');
            } else if (progress >= 50) {
                progressFill.classList.add('half-complete');
            }
        }

        if (progressText) {
            // Enhanced progress text with completion feedback
            let progressMessage = `${progress}% Complete`;
            if (progress === 100) {
                progressMessage += ' ✓ Ready to submit!';
            } else if (progress >= 75) {
                progressMessage += ' - Almost there!';
            } else if (progress >= 50) {
                progressMessage += ' - Halfway done';
            } else if (progress > 0) {
                progressMessage += ' - Good start!';
            }

            progressText.textContent = progressMessage;
        }

        // Optional: Add subtle visual feedback to the entire progress container
        const progressContainer = document.getElementById('progress-container') ||
            document.querySelector('.progress-container');
        if (progressContainer) {
            progressContainer.className = 'progress-container';
            if (progress >= 100) {
                progressContainer.classList.add('complete');
            }
        }

        // Debug logging (remove in production)
        console.log(`Progress Update - Tab: ${this.currentTab}, Completed: ${completedFields}/${fields.length}, Weight: ${completedWeight}/${totalWeight}, Progress: ${progress}%`);
    }

    getFieldLabel(fieldId) {
        const labelMap = {
            // Commission fields
            'client-name': 'Full Name',
            'client-email': 'Email Address',
            'commission-type': 'Commission Type',
            'commission-details': 'Commission Details',
            'terms-agreement': 'Terms Agreement',
            // Inquiry fields
            'inquiry-name': 'Full Name',
            'inquiry-email': 'Email Address',
            'inquiry-subject': 'Subject',
            'inquiry-message': 'Message',
            // Support fields
            'support-name': 'Full Name',
            'support-email': 'Email Address',
            'support-category': 'Support Category',
            'support-priority': 'Priority Level',
            'support-description': 'Issue Description'
        };
        return labelMap[fieldId] || fieldId;
    }

    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    hideError(elementId) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    showSuccess(elementId) {
        const successElement = document.getElementById(elementId);
        if (successElement) {
            successElement.style.display = 'block';
        }
    }

    hideSuccess(elementId) {
        const successElement = document.getElementById(elementId);
        if (successElement) {
            successElement.style.display = 'none';
        }
    }

    clearFieldError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(`${fieldId}-error`);

        if (field) {
            field.classList.remove('invalid');
        }

        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    async handleSubmit(e, tabName) {
        e.preventDefault();

        console.log(`Submitting ${tabName} form...`);

        // Check if commission slots are available (only for commission tab)
        if (tabName === 'commission' && this.availableSlots <= 0) {
            alert('Sorry, commissions are currently closed. Please check back later.');
            return;
        }

        // Validate all fields for current tab
        if (!this.validateAllFields(tabName)) {
            console.log('Validation failed for', tabName);
            return;
        }

        console.log('Validation passed, proceeding with submission...');

        // Set loading state
        this.setLoadingState(true, tabName);

        try {
            const form = this.forms[tabName];
            let formData;

            if (this.fileUploadEnabled) {
                // Use full FormData with file uploads (for paid plans)
                formData = new FormData(form);
                console.log('File upload enabled - including files');
            } else {
                // Manual FormData creation without files (for free plans)
                formData = new FormData();
                const formElements = form.elements;

                for (let element of formElements) {
                    if (element.name && element.type !== 'file') {
                        if (element.type === 'checkbox') {
                            if (element.checked) {
                                formData.append(element.name, element.value);
                            }
                        } else if (element.value) {
                            formData.append(element.name, element.value);
                        }
                    }
                }

                // Handle file upload information as text for free plans
                if (tabName === 'commission') {
                    const fileInput = document.getElementById('file-input');
                    if (fileInput && fileInput.files.length > 0) {
                        const file = fileInput.files[0];
                        formData.append('Reference Image Info', `File name: ${file.name}, Size: ${this.formatFileSize(file.size)}, Type: ${file.type}`);
                        formData.append('Note', 'Reference image was selected but not uploaded due to API limitations. Please send the image via email if needed.');
                    }
                }
                console.log('File upload disabled - sending file info as text');
            }

            // Add additional metadata
            formData.append('Submission Time', new Date().toLocaleString());
            formData.append('Form Type', tabName);
            formData.append('Form Version', this.fileUploadEnabled ? '2.0 - Enhanced (With File Upload)' : '2.0 - Enhanced (No File Upload)');

            // Log form data for debugging
            console.log('Form data being sent:');
            for (let [key, value] of formData.entries()) {
                if (value instanceof File) {
                    console.log(key, `File: ${value.name} (${value.size} bytes)`);
                } else {
                    console.log(key, value);
                }
            }

            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);

            if (response.ok) {
                this.handleSuccess(tabName);
            } else {
                const responseText = await response.text();
                console.log('Error response text:', responseText);

                let errorData = {};
                try {
                    errorData = JSON.parse(responseText);
                } catch (e) {
                    console.log('Could not parse error response as JSON');
                }

                throw new Error(errorData.message || `Server error: ${response.status} ${response.statusText}`);
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            this.handleError(`There was an error submitting your request: ${error.message}. Please try again or contact us directly.`);
        } finally {
            this.setLoadingState(false, tabName);
        }
    }

    setLoadingState(loading, tabName) {
        const submitBtn = this.submitBtns[tabName];
        const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;

        if (loading && submitBtn && btnText) {
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            btnText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
        } else if (submitBtn && btnText) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');

            switch (tabName) {
                case 'commission':
                    btnText.textContent = 'Submit Commission Request';
                    break;
                case 'inquiry':
                    btnText.textContent = 'Send Inquiry';
                    break;
                case 'support':
                    btnText.textContent = 'Submit Support Request';
                    break;
            }
        }
    }

    handleSuccess(tabName) {
        // Reduce available slots only for commission
        if (tabName === 'commission') {
            this.availableSlots--;
            this.updateFormStatus();
        }

        // Show success message
        const form = this.forms[tabName];
        const successTitle = {
            commission: 'Commission Request Submitted!',
            inquiry: 'Inquiry Sent Successfully!',
            support: 'Support Request Submitted!'
        };

        let successMessage = {
            commission: 'Thank you for your commission request! You\'ll receive a confirmation email shortly.',
            inquiry: 'Thank you for your inquiry! We\'ll get back to you within 24-48 hours.',
            support: 'Thank you for contacting support! We\'ll help resolve your issue as soon as possible.'
        };

        // Add note about reference images for commission based on upload capability
        if (tabName === 'commission') {
            const fileInput = document.getElementById('file-input');
            if (fileInput && fileInput.files.length > 0) {
                if (this.fileUploadEnabled) {
                    successMessage[tabName] += ' <br><br><strong>✅ Your reference image has been uploaded successfully!</strong>';
                } else {
                    successMessage[tabName] += ' <br><br><strong>🔧 Note:</strong> Your reference image information was recorded. Please send the actual image file to kyuushi992@gmail.com for your commission.';
                }
            }
        }

        const successHTML = `
            <div style="text-align: center; padding: 40px; background: var(success-bg); border-radius: var(--border-stylized); border: 2px solid var(--success);">
                <div style="font-size: 4rem; color: var(--success); margin-bottom: 20px;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2 style="color: var(--success); margin-bottom: 15px;">${successTitle[tabName]}</h2>
                <p style="margin-bottom: 20px;">${successMessage[tabName]}</p>
                <p style="font-size: 0.9rem; color: var(--accent-color);">
                    Your request has been successfully processed. Check your email for confirmation details.
                </p>
                <button onclick="location.reload()" style="margin-top: 20px; padding: 12px 24px; background: var(--success); color: white; border: none; border-radius: var(--border-stylized); cursor: pointer;">
                    Submit Another Request
                </button>
            </div>
        `;

        form.innerHTML = successHTML;
        form.scrollIntoView({ behavior: 'smooth' });

        // Optional: Track submission analytics
        this.trackSubmission(tabName);
    }

    handleError(message) {
        const errorHTML = `
            <div style="text-align: center; padding: 40px; background: var(--error-bg); border-radius: var(--border-stylized); border: 2px solid var(--error);">
                <div style="font-size: 4rem; color: var(--error); margin-bottom: 20px;">
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <h2 style="color: var(--error); margin-bottom: 15px;">Submission Error</h2>
                <p style="margin-bottom: 20px;">${message}</p>
                <p style="font-size: 0.9rem; color: var(--accent-color); margin-bottom: 20px;">
                    Please try again, or contact us directly at: 
                    <a href="mailto:kyuushi992@gmail.com" style="color: var(--accent-color);">kyuushi992@gmail.com</a>
                </p>
                <button onclick="location.reload()" style="margin-top: 20px; padding: 12px 24px; background: var(--error); color: white; border: none; border-radius: var(--border-stylized); cursor: pointer;">
                    Try Again
                </button>
            </div>
        `;

        this.validationSummary.innerHTML = errorHTML;
        this.validationSummary.style.display = 'block';
        this.validationSummary.scrollIntoView({ behavior: 'smooth' });
    }

    trackSubmission(tabName) {
        // Optional: Add analytics tracking here
        console.log(`${tabName} form submitted successfully`);
    }
}

// Global tab switching function (for backward compatibility)
function switchTab(tabName) {
    if (window.commissionForm) {
        window.commissionForm.switchTab(tabName);
    }
}

// QR Modal Functions
function openQRModal(paymentType = 'paypal') {
    const modal = document.getElementById('qr-modal');
    const overlay = document.getElementById('modal-overlay');

    modal.classList.add('active');
    overlay.classList.add('active');

    // Show the specific payment type
    showQR(paymentType);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeQRModal() {
    const modal = document.getElementById('qr-modal');
    const overlay = document.getElementById('modal-overlay');

    modal.classList.remove('active');
    overlay.classList.remove('active');

    // Restore body scroll
    document.body.style.overflow = '';
}

function showQR(type) {
    // Remove active class from all tabs and items
    document.querySelectorAll('.qr-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.qr-item').forEach(item => item.classList.remove('active'));

    // Add active class to selected tab and item
    const selectedTab = document.querySelector(`.qr-tab:nth-child(${getTabIndex(type)})`);
    const selectedItem = document.getElementById(`qr-${type}`);

    if (selectedTab) selectedTab.classList.add('active');
    if (selectedItem) selectedItem.classList.add('active');
}

function getTabIndex(type) {
    const tabMap = {
        'paypal': 1,
        'maya': 2,
        'gcash': 3
    };
    return tabMap[type] || 1;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.commissionForm = new CommissionForm();

    // Enhanced interactions
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (input.parentElement) {
                input.parentElement.style.transform = 'scale(1.01)';
            }
        });

        input.addEventListener('blur', () => {
            if (input.parentElement) {
                input.parentElement.style.transform = 'scale(1)';
            }
        });
    });

    // Add loading animation for payment methods
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach((method, index) => {
        method.style.animationDelay = `${index * 0.1}s`;
        method.classList.add('fade-in');
    });

    // Add stagger animation for info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('slide-up');
    });

    // Enhanced mascot interactions
    const mascotImg = document.querySelector('.mascot-image img');
    if (mascotImg) {
        mascotImg.addEventListener('mouseenter', () => {
            mascotImg.style.animationDuration = '0.5s';
        });

        mascotImg.addEventListener('mouseleave', () => {
            mascotImg.style.animationDuration = '3s';
        });
    }

    // Keyboard navigation helpers
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter to submit form
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const currentForm = window.commissionForm.forms[window.commissionForm.currentTab];
            const submitBtn = window.commissionForm.submitBtns[window.commissionForm.currentTab];
            if (currentForm && submitBtn && !submitBtn.disabled) {
                submitBtn.click();
            }
        }

        // Escape to close modal
        if (e.key === 'Escape') {
            closeQRModal();
        }
    });
});