export const ContactBanner = () => {
  type IContactList = { label: string; url: string };
  const contactList: IContactList[] = [
    { label: "github", url: "https://github.com/gorvk" },
    { label: "linkedin", url: "https://linkedin.com/in/gorvk" },
    { label: "mail", url: "mailto:gstar1525@gmail.com" },
  ];
  return (
    <span>
      {contactList.map((contact, index) => (
        <span key={index}>
          <a className="underline" href={contact.url}>
            {contact.label}
          </a>
          {index < contactList.length - 1 && " | "}
        </span>
      ))}
    </span>
  );
};
