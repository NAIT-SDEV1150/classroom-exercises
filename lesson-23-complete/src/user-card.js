// Self-contained user card web component with Shadow DOM
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      --card-bg: var(--global-card-bg, #ffffff);
      --card-color: var(--global-card-color, #222222);
      --card-accent: var(--global-card-accent, #0077ff);
      display: block;
    }
    .card {
      background: var(--card-bg);
      color: var(--card-color);
      border: 1px solid #e6e6e6;
      padding: 12px;
      border-radius: 8px;
      display: flex;
      gap: 12px;
      align-items: center;
      width: 320px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    }
    .name {
      color: var(--card-accent);
      display: block;
      font-size: 1.2em;
      font-weight: bold;
      margin: 0;
    }
    .description {
      font-size: 0.9rem;
      color: #666;
      display: block;
      margin-top: 4px;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      flex: 0 0 80px;
    }
  </style>
  
  <div class="card">
    <img src="" width="80" height="80" alt="avatar">
    <div class="info">
      <slot name="name" class="name"></slot>
      <slot name="description" class="description"></slot>
      <button>Follow</button>
    </div>
  </div>
`;
document.body.appendChild(template);

class UserCard extends HTMLElement {
  constructor() {
    super();

    // Added property to track follow state
    this._followed = false;
    this._user = null;
    // Bind the button handler to the custom element
    this._onButtonClick = this._onButtonClick.bind(this);

    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);
    // Keep the img src blank here — it will be set from property/attribute
    this._img = content.querySelector('img');
    this._btn = content.querySelector('button');
    shadow.appendChild(content);
  }

  _renderFromUser() {
    if (this._user) {
      // Update image and fallback attributes
      if (this._user.avatar) {
        this._img.src = this._user.avatar;
      } else {
        this._img.src = 'https://placehold.co/80x80/0077ff/ffffff';
      }

      this.setAttribute('user-id', this._user.id || '');
      // Update internal slots via shadow DOM query selectors for text nodes.
      // We want to avoid manipulating light DOM directly since we are provided with a user property.
      const nameSlot = this.shadowRoot.querySelector('slot[name="name"]');
      if (nameSlot) {
        nameSlot.textContent = this._user.name || '';
      }

      const descSlot = this.shadowRoot.querySelector('slot[name="description"]');
      if (descSlot) {
        descSlot.textContent = this._user.description || '';
      }
    }
  }

  // Create a user property { id, name, avatar, description }
  set user(obj) {
    this._user = obj;
    // Render the UI (assume user has changed)
    this._renderFromUser();
  }

  get user() {
    return this._user;
  }

  _onButtonClick() {
    this._setFollow(!this._followed);
  }

  // Lifecycle: called when element is added to DOM
  connectedCallback() {
    // Attach local listener(s)
    this._btn.addEventListener('click', this._onButtonClick);

    // If user property was set before connection, render it now
    if (this._user) {
      this._renderFromUser();
    } else {
      // Fallback to attributes if user property not provided
      const avatar = this.getAttribute('avatar');
      if (avatar) {
        this._img.src = avatar;
      } else {
        this._img.src = 'https://placehold.co/80x80/0077ff/ffffff';
      }
    }
  }

  disconnectedCallback() {
    // Cleanup listener
    this._btn.removeEventListener('click', this._onButtonClick);
  }

  follow() {
    this._setFollow(true);
  }

  unfollow() {
    this._setFollow(false);
  }

  // Property to read followed state
  get followed() {
    return this._followed;
  }

  _setFollow(value) {
    this._followed = value;
    this._btn.textContent = this._followed ? 'Following' : 'Follow';
    this.dispatchEvent(new CustomEvent('follow-change', {
      detail: { id: this.getAttribute('user-id') || null, followed: this._followed },
      bubbles: true,
      composed: true,
    }));
  }

  // Follow button handler
  _onFollow() {
    this._setFollow(!this._followed);
  }

  // Respond to attribute changes if needed in the future
  static get observedAttributes() {
    return ['avatar'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'avatar' && this.shadowRoot) {
      const img = this.shadowRoot.querySelector('img');
      if (img) {
        img.src = newValue;
      }
    }
  }
}

customElements.define('user-card', UserCard);

export default UserCard;
