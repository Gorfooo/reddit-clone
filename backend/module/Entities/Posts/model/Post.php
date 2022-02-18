<?php
namespace Reddit\Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Post")
*/
class Post
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_post;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_post")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $conteudo;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $titulo;

    /**
    * @ORM\OneToMany(targetEntity="PostComentario", mappedBy="id_post")
    */
    private $comentarios;

    /**
    * @ORM\OneToMany(targetEntity="PostAcoes", mappedBy="id_post")
    */
    private $post_acoes;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Aplicacao\Model\Denuncia", mappedBy="id_post")
    */
    private $denuncias;

    /**
    * @ORM\ManyToMany(targetEntity="Reddit\Posts\Model\Post", mappedBy="id_post")
    */
    private $tags;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->comentarios = new \Doctrine\Common\Collections\ArrayCollection();
        $this->post_acoes = new \Doctrine\Common\Collections\ArrayCollection();
        $this->denuncias = new \Doctrine\Common\Collections\ArrayCollection();
        $this->tags = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get idPost.
     *
     * @return int
     */
    public function getIdPost()
    {
        return $this->id_post;
    }

    /**
     * Set conteudo.
     *
     * @param string $conteudo
     *
     * @return Post
     */
    public function setConteudo($conteudo)
    {
        $this->conteudo = $conteudo;

        return $this;
    }

    /**
     * Get conteudo.
     *
     * @return string
     */
    public function getConteudo()
    {
        return $this->conteudo;
    }

    /**
     * Set titulo.
     *
     * @param string $titulo
     *
     * @return Post
     */
    public function setTitulo($titulo)
    {
        $this->titulo = $titulo;

        return $this;
    }

    /**
     * Get titulo.
     *
     * @return string
     */
    public function getTitulo()
    {
        return $this->titulo;
    }

    /**
     * Set idUsuario.
     *
     * @param \Reddit\Usuario\model\Usuario $idUsuario
     *
     * @return Post
     */
    public function setIdUsuario(\Reddit\Usuario\model\Usuario $idUsuario)
    {
        $this->id_usuario = $idUsuario;

        return $this;
    }

    /**
     * Get idUsuario.
     *
     * @return \Reddit\Usuario\model\Usuario
     */
    public function getIdUsuario()
    {
        return $this->id_usuario;
    }

    /**
     * Add comentario.
     *
     * @param \Reddit\Posts\Model\PostComentario $comentario
     *
     * @return Post
     */
    public function addComentario(\Reddit\Posts\Model\PostComentario $comentario)
    {
        $this->comentarios[] = $comentario;

        return $this;
    }

    /**
     * Remove comentario.
     *
     * @param \Reddit\Posts\Model\PostComentario $comentario
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeComentario(\Reddit\Posts\Model\PostComentario $comentario)
    {
        return $this->comentarios->removeElement($comentario);
    }

    /**
     * Get comentarios.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getComentarios()
    {
        return $this->comentarios;
    }

    /**
     * Add postAco.
     *
     * @param \Reddit\Posts\Model\PostAcoes $postAco
     *
     * @return Post
     */
    public function addPostAco(\Reddit\Posts\Model\PostAcoes $postAco)
    {
        $this->post_acoes[] = $postAco;

        return $this;
    }

    /**
     * Remove postAco.
     *
     * @param \Reddit\Posts\Model\PostAcoes $postAco
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removePostAco(\Reddit\Posts\Model\PostAcoes $postAco)
    {
        return $this->post_acoes->removeElement($postAco);
    }

    /**
     * Get postAcoes.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPostAcoes()
    {
        return $this->post_acoes;
    }

    /**
     * Add denuncia.
     *
     * @param \Reddit\Aplicacao\Model\Denuncia $denuncia
     *
     * @return Post
     */
    public function addDenuncia(\Reddit\Aplicacao\Model\Denuncia $denuncia)
    {
        $this->denuncias[] = $denuncia;

        return $this;
    }

    /**
     * Remove denuncia.
     *
     * @param \Reddit\Aplicacao\Model\Denuncia $denuncia
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeDenuncia(\Reddit\Aplicacao\Model\Denuncia $denuncia)
    {
        return $this->denuncias->removeElement($denuncia);
    }

    /**
     * Get denuncias.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getDenuncias()
    {
        return $this->denuncias;
    }

    /**
     * Add tag.
     *
     * @param \Reddit\Posts\Model\Post $tag
     *
     * @return Post
     */
    public function addTag(\Reddit\Posts\Model\Post $tag)
    {
        $this->tags[] = $tag;

        return $this;
    }

    /**
     * Remove tag.
     *
     * @param \Reddit\Posts\Model\Post $tag
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeTag(\Reddit\Posts\Model\Post $tag)
    {
        return $this->tags->removeElement($tag);
    }

    /**
     * Get tags.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getTags()
    {
        return $this->tags;
    }
}
